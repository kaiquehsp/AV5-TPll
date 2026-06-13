-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "dataNascimento" DATETIME NOT NULL,
    "dataCadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "dataExpedicao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" TEXT NOT NULL,
    CONSTRAINT "Documento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    CONSTRAINT "Endereco_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Acomodacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeAcomadacao" TEXT NOT NULL,
    "camaCasal" INTEGER NOT NULL,
    "camaSolteiro" INTEGER NOT NULL,
    "suite" INTEGER NOT NULL,
    "climatizacao" BOOLEAN NOT NULL,
    "garagem" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Hospedagem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataEntrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataSaida" DATETIME,
    "clienteId" TEXT NOT NULL,
    "acomodacaoId" TEXT NOT NULL,
    CONSTRAINT "Hospedagem_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Hospedagem_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Documento_numero_key" ON "Documento"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_clienteId_key" ON "Endereco"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Acomodacao_nomeAcomadacao_key" ON "Acomodacao"("nomeAcomadacao");
