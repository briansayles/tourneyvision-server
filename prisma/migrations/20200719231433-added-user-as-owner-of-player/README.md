# Migration `20200719231433-added-user-as-owner-of-player`

This migration has been generated by briansayles at 7/19/2020, 11:14:33 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Player" ADD COLUMN "userId" text  NOT NULL ;

ALTER TABLE "public"."Player" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200719230835-added-buy-and-player-and-relationships-for-cost..20200719231433-added-user-as-owner-of-player
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
@@ -13,8 +13,9 @@
   updatedAt DateTime @default(now())
   name String
   credits Int @default(0)
   tournaments Tournament[]
+  players Player[]
 }
 model Tournament {
   id String @default(uuid()) @id
@@ -84,8 +85,10 @@
 model Player {
   id String @default(uuid()) @id
   createdAt DateTime @default(now())
   updatedAt DateTime @default(now())
+  user User @relation(fields: [userId], references: [id])
+  userId String
   name String?
   buys Buy[]
 }
```


