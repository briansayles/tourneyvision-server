# Migration `20200719224524-default-all-created-at-and-updated-at-fields-to-now`

This migration has been generated by briansayles at 7/19/2020, 10:45:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Chip" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "public"."Cost" ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "public"."Segment" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "public"."Timer" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "public"."Tournament" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200719223918-made-timer-optional-on-tournament..20200719224524-default-all-created-at-and-updated-at-fields-to-now
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -17,10 +17,10 @@
 }
 model Tournament {
   id String @default(uuid()) @id
-  createdAt DateTime
-  updatedAt DateTime
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
   user User? @relation(fields: [userId], references: [id])
   userId String?
   title String
   subtitle String
@@ -33,10 +33,10 @@
 }
 model Segment {
   id String @default(uuid()) @id
-  createdAt DateTime
-  updatedAt DateTime
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
   duration Int
   sBlind Int
   bBlind Int
   ante Int
@@ -46,10 +46,10 @@
   }
 model Chip {
   id String @default(uuid()) @id
-  createdAt DateTime
-  updatedAt DateTime
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
   denom Int
   color String
   rimColor String
   textColor String
@@ -59,8 +59,10 @@
 }
 model Cost {
   id String @default(uuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
   costType String
   price Int
   chipStack Int
   tournament Tournament @relation(fields: [tournamentId], references: [id])
@@ -68,11 +70,11 @@
 }
 model Timer {
   id String @default(uuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
   active Boolean
-  createdAt DateTime
-  updatedAt DateTime
   elapsed Int
   oneMinuteRemainingSpeech String
   playOneMinuteRemainingSound Boolean
   endOfRoundSpeech String
```


