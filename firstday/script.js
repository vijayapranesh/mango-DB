
// insert oneData to the collection 

db.vijay.insertOne({
    name:"dikshan",
    username:"dikshan1234",
    email:"dikshan@gmail.com",
    batch:"be49",
    fees:500
    })

    {
        acknowledged: true,
        insertedId: ObjectId("6561ce00ab20a729c5b69d8f")
      }



// insert manyData to the collection

db.vijay.insertMany([
    {
    name:"dikshan",
    username:"dikshan1234",
    email:"dikshan@gmail.com",
    batch:"be49",
    fees:500,
    },
    {
    name:"priya",
    username:"priya1234",
    email:"priya@gmail.com",
    batch:"be50",
    fees:1000
    },
    {
    name:"birundha",
    username:"birundha1234",
    email:"birundha@gmail.com",
    batch:"be49",
    fees:1500
    },
    {
    name:"siva",
    username:"siva1234",
    email:"siva@gmail.com",
    batch:"be51",
    fees:500
    },
    {
    name:"hari",
    username:"hari1234",
    email:"hari@gmail.com",
    batch:"be48",
    fees:2000
    },
    {
    name:"pranesh",
    username:"pranesh1234",
    email:"pranesh@gmail.com",
    batch:"be48",
    fees:500
    }
    ])
    {
        acknowledged: true,
        insertedIds: {
          '0': ObjectId("6561d0a8ab20a729c5b69d90"),
          '1': ObjectId("6561d0a8ab20a729c5b69d91"),
          '2': ObjectId("6561d0a8ab20a729c5b69d92"),
          '3': ObjectId("6561d0a8ab20a729c5b69d93"),
          '4': ObjectId("6561d0a8ab20a729c5b69d94"),
          '5': ObjectId("6561d0a8ab20a729c5b69d95")
        }
      }


      // fine method - to fine the relevent value

      db.vijay.find({fees:500})
      {
        _id: ObjectId("6561ce00ab20a729c5b69d8f"),
        name: 'dikshan',
        username: 'dikshan1234',
        email: 'dikshan@gmail.com',
        batch: 'be49',
        fees: 500
      }
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d93"),
        name: 'siva',
        username: 'siva1234',
        email: 'siva@gmail.com',
        batch: 'be51',
        fees: 500
      }
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d95"),
        name: 'pranesh',
        username: 'pranesh1234',
        email: 'pranesh@gmail.com',
        batch: 'be48',
        fees: 500
      }



      // fineOne method - to fine the relevent value and will give the first relevent value

        db.vijay.findOne({fees:500})
      {
        _id: ObjectId("6561ce00ab20a729c5b69d8f"),
        name: 'dikshan',
        username: 'dikshan1234',
        email: 'dikshan@gmail.com',
        batch: 'be49',
        fees: 500
      }

      db.vijay.find({batch:"be48"})
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d94"),
        name: 'hari',
        username: 'hari1234',
        email: 'hari@gmail.com',
        batch: 'be48',
        fees: 2000
      }
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d95"),
        name: 'pranesh',
        username: 'pranesh1234',
        email: 'pranesh@gmail.com',
        batch: 'be48',
        fees: 500
      }


      // Find the the value by ID 

      db.vijay.find({ _id: ObjectId("6561d0a8ab20a729c5b69d95")})
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d95"),
        name: 'pranesh',
        username: 'pranesh1234',
        email: 'pranesh@gmail.com',
        batch: 'be48',
        fees: 500
      }
      
      
      // assigning other value in id by using $set and $unset operator

      db.vijay.updateOne({  _id: ObjectId("6561d0a8ab20a729c5b69d91")},{
        $set:{
        email:"vijaypriya@gmail.com"
        }
        })
        {
          acknowledged: true,
          insertedId: null,
          matchedCount: 1,
          modifiedCount: 1,
          upsertedCount: 0
        }




        db.vijay.updateOne({ _id: ObjectId("6561d0a8ab20a729c5b69d92")},{
          $unset:{
          email:"abc@gmail.com"
          }
          })
          {
            acknowledged: true,
            insertedId: null,
            matchedCount: 1,
            modifiedCount: 1,
            upsertedCount: 0
          }


         // assigning other value in filter method using $set operator (updateOne,updateMany)

         db.vijay.updateOne({batch:"be50"},{
          $set:{
          fees:1000
          }
          })
          {
            acknowledged: true,
            insertedId: null,
            matchedCount: 1,
            modifiedCount: 0,
            upsertedCount: 0
          }
         
         
         db.vijay.updateMany({batch:"be48"},{
          $set:{
          fees:10
          }
          })
          {
            acknowledged: true,
            insertedId: null,
            matchedCount: 2,
            modifiedCount: 2,
            upsertedCount: 0
          }


          // delete data (one or many)

          db.vijay.deleteOne({_id: ObjectId("6561d0a8ab20a729c5b69d95")})
          {
            acknowledged: true,
            deletedCount: 1
          }

          
          db.vijay.deleteMany({batch:"be49"})
          {
            acknowledged: true,
            deletedCount: 2
          }