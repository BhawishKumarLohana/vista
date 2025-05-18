-- THIS IS A DATABASE CREATION FILE FOR REFERECNCE OF OUR SCHEMA IN SQL

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '',
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "displayName" TEXT,
    "full_Name" TEXT NOT NULL DEFAULT 'Unknown',
    "user_info" TEXT
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "dark_mode" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "UserSettings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coin" (
    "coin_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "cmc_rank" INTEGER NOT NULL,
    "last_updated" DATETIME NOT NULL,
    "market_cap" REAL NOT NULL,
    "percent_change_24h" REAL NOT NULL,
    "percent_change_7d" REAL NOT NULL,
    "price" REAL NOT NULL,
    "slug" TEXT NOT NULL,
    "volume_24h" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "HistoricalCoin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "coin_id" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "open" REAL NOT NULL,
    "high" REAL NOT NULL,
    "low" REAL NOT NULL,
    "close" REAL NOT NULL,
    "volume" REAL NOT NULL,
    CONSTRAINT "HistoricalCoin_coin_id_fkey" FOREIGN KEY ("coin_id") REFERENCES "Coin" ("coin_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PortfolioEntry" (
    "entry_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "coin_id" INTEGER NOT NULL,
    CONSTRAINT "PortfolioEntry_coin_id_fkey" FOREIGN KEY ("coin_id") REFERENCES "Coin" ("coin_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PortfolioEntry_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TrackRecord" (
    "track_record_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "action" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "coin_id" INTEGER NOT NULL,
    CONSTRAINT "TrackRecord_coin_id_fkey" FOREIGN KEY ("coin_id") REFERENCES "Coin" ("coin_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TrackRecord_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Alert" (
    "alert_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "floor_price" INTEGER,
    "ceiling_price" INTEGER,
    "user_id" INTEGER NOT NULL,
    "coin_id" INTEGER NOT NULL,
    CONSTRAINT "Alert_coin_id_fkey" FOREIGN KEY ("coin_id") REFERENCES "Coin" ("coin_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Alert_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FriendRequest" (
    "request_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FriendRequest_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FriendRequest_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Coin_symbol_key" ON "Coin"("symbol");

-- CreateIndex
CREATE INDEX "HistoricalCoin_coin_id_fkey" ON "HistoricalCoin"("coin_id");

-- CreateIndex
CREATE INDEX "PortfolioEntry_coin_id_fkey" ON "PortfolioEntry"("coin_id");

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioEntry_user_id_coin_id_key" ON "PortfolioEntry"("user_id", "coin_id");

-- CreateIndex
CREATE INDEX "TrackRecord_coin_id_fkey" ON "TrackRecord"("coin_id");

-- CreateIndex
CREATE INDEX "TrackRecord_user_id_fkey" ON "TrackRecord"("user_id");

-- CreateIndex
CREATE INDEX "Alert_coin_id_fkey" ON "Alert"("coin_id");

-- CreateIndex
CREATE INDEX "Alert_user_id_fkey" ON "Alert"("user_id");

-- CreateIndex
CREATE INDEX "FriendRequest_receiver_id_fkey" ON "FriendRequest"("receiver_id");

-- CreateIndex
CREATE INDEX "FriendRequest_sender_id_fkey" ON "FriendRequest"("sender_id");
