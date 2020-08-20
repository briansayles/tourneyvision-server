import { schema, use } from "nexus"
import { prisma } from "nexus-plugin-prisma"

use(prisma({ features: { crud: true } }))

schema.objectType({
  name: "User",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.tournaments()
  },
})
schema.objectType({
  name: "Tournament",
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.userId()
    t.model.segments()
    t.model.chips()
    t.model.costs()
    t.model.game()
    t.model.subtitle()
    t.model.tags()
    t.model.comments()
    t.model.timer()
  }
})
schema.objectType({
  name: "Segment",
  definition(t) {
    t.model.duration()
    t.model.ante()
    t.model.sBlind()
    t.model.bBlind()
    t.model.game()
  }
})
schema.objectType({
  name: "Chip",
  definition(t) {
    t.model.denom()
    t.model.color()
    t.model.qtyAvailable()
  }
})
schema.objectType({
  name: "Cost",
  definition(t){
    t.model.price()
    t.model.chipStack()
    t.model.costType()
    t.model.buys()
  }
})
schema.objectType({
  name: "Buy",
  definition(t){
    t.model.id()
  }
})
schema.objectType({
  name: "Tag",
  definition(t){
    t.model.name()
  }
})
schema.objectType({
  name: "Table",
  definition(t){
    t.model.name()
  }
})
schema.objectType({
  name: "Timer",
  definition(t){
    t.model.active()
    t.model.elapsed()
    t.model.updatedAt()
    t.model.endOfRoundSpeech()
  }
})
schema.queryType({
  definition(t) {
    t.list.field("allUsers", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.db.user.findMany()
        
      },
    })
    t.crud.user()
    t.crud.users()
    t.crud.tournament()
    t.crud.tournaments()
  },
})

schema.mutationType({
  definition(t) {
    // t.field("bigRedButton", {
    //   type: "String",
    //   async resolve(_parent, _args, ctx) {
    //     const { count } = await ctx.db.user.deleteMany({})
    //     return `${count} user(s) destroyed. Thanos will be proud.`
    //   },
    // })
    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.deleteManyUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()
  },
})