-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mail" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "ip" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "i18n_key" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Finance" (
    "id" TEXT NOT NULL,
    "gold" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "vaultGold" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "empire_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaultTransaction" (
    "id" TEXT NOT NULL,
    "finance_id" TEXT NOT NULL,
    "i18n_key" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empire" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "banner_id" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,
    "armory" JSONB NOT NULL,
    "population" JSONB NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "attributes" JSONB NOT NULL,
    "turns_available" INTEGER NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarLogEntry" (
    "id" TEXT NOT NULL,
    "battle_type" TEXT NOT NULL,
    "attacker_id" TEXT NOT NULL,
    "defender_id" TEXT NOT NULL,
    "turns" INTEGER NOT NULL,
    "details" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Structure" (
    "id" TEXT NOT NULL,
    "empire_id" TEXT NOT NULL,
    "i18n_key" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "attributes" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Finance_empire_id_unique" ON "Finance"("empire_id");

-- CreateIndex
CREATE UNIQUE INDEX "Empire_user_id_unique" ON "Empire"("user_id");

-- AddForeignKey
ALTER TABLE "AuditLog" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Finance" ADD FOREIGN KEY ("empire_id") REFERENCES "Empire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaultTransaction" ADD FOREIGN KEY ("finance_id") REFERENCES "Finance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empire" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarLogEntry" ADD FOREIGN KEY ("attacker_id") REFERENCES "Empire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarLogEntry" ADD FOREIGN KEY ("defender_id") REFERENCES "Empire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Structure" ADD FOREIGN KEY ("empire_id") REFERENCES "Empire"("id") ON DELETE CASCADE ON UPDATE CASCADE;
