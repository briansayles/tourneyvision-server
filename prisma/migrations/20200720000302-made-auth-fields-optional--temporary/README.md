# Migration `20200720000302-made-auth-fields-optional--temporary`

This migration has been generated by briansayles at 7/20/2020, 12:03:02 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200719235614-added-auth-provider-and-auth0-models-and-relations..20200720000302-made-auth-fields-optional--temporary
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
@@ -10,9 +10,9 @@
 model User {
   id   String @default(cuid()) @id
   createdAt DateTime @default(now())
   updatedAt DateTime @default(now())
-  authProvider AuthProvider
+  authProvider AuthProvider?
   name String
   credits Int @default(0)
   tournaments Tournament[]
   players Player[]
@@ -22,9 +22,9 @@
   id String @default(uuid()) @id
   createdAt DateTime @default(now())
   user User @relation(fields: [userId], references: [id])
   userId String
-  auth0 Auth0
+  auth0 Auth0?
 }
 model Auth0 {
   id String @default(uuid()) @id
```


