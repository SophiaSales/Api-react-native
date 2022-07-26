-- CreateTable
CREATE TABLE "orderManagement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "num_order" INTEGER NOT NULL,
    "name_client" TEXT NOT NULL,
    "num_table" INTEGER NOT NULL,
    "order" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL
);
