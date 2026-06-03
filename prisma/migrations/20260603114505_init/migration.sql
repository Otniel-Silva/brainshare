-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'banned', 'retired');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('normal', 'banned');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified_at" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'active',
    "remember_token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
