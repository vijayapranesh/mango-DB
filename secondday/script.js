  
  
  //usages of operators (equal to)


  db.vijay.find({fees:{$eq:500}}) 
  
  {
    _id: ObjectId("6561d0a8ab20a729c5b69d93"),
    name: 'siva',
    username: 'siva1234',
    email: 'siva@gmail.com',
    batch: 'be51',
    fees: 500
  },
  {
    _id: ObjectId("656367d5ac1455cd8c4d097b"),
    name: 'suhan',
    username: 'suhan1234',
    email: 'suhan@gmail.com',
    batch: 'b48',
    fees: 500
  }



   //usages of operators (greater than)


   db.vijay.find({fees:{$gt:500}})

   {
    _id: ObjectId("6561d0a8ab20a729c5b69d91"),
    name: 'priya',
    username: 'priya1234',
    email: 'vijaypriya@gmail.com',
    batch: 'be50',
    fees: 1000
   }
   {
    _id: ObjectId("656367d5ac1455cd8c4d097a"),
    name: 'vijay',
    username: 'vijay1234',
    email: 'vijay@gmail.com',
    batch: 'b49',
    fees: 1500
  }


   //usages of operators (less than)

   db.vijay.find({fees:{$lt:1000}})

{
  _id: ObjectId("6561d0a8ab20a729c5b69d93"),
  name: 'siva',
  username: 'siva1234',
  email: 'siva@gmail.com',
  batch: 'be51',
  fees: 500
}
{
    _id: ObjectId("656367d5ac1455cd8c4d097b"),
    name: 'suhan',
    username: 'suhan1234',
    email: 'suhan@gmail.com',
    batch: 'b48',
    fees: 500
  }



//usages of operators (less than equalto)

  db.vijay.find({fees:{$lte:1000}})

  {
    _id: ObjectId("6561d0a8ab20a729c5b69d91"),
    name: 'priya',
    username: 'priya1234',
    email: 'vijaypriya@gmail.com',
    batch: 'be50',
    fees: 1000
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
    _id: ObjectId("656367d5ac1455cd8c4d097b"),
    name: 'suhan',
    username: 'suhan1234',
    email: 'suhan@gmail.com',
    batch: 'b48',
    fees: 500
  }


//usages of operators (greater than equalto)

db.vijay.find({fees:{$gte:1000}})

{
    _id: ObjectId("6561d0a8ab20a729c5b69d91"),
    name: 'priya',
    username: 'priya1234',
    email: 'vijaypriya@gmail.com',
    batch: 'be50',
    fees: 1000
  }
  {
    _id: ObjectId("656367d5ac1455cd8c4d097a"),
    name: 'vijay',
    username: 'vijay1234',
    email: 'vijay@gmail.com',
    batch: 'b49',
    fees: 1500
  }

//usages of operators (not equal to)

  db.vijay.find({fees:{$ne:1000}})

  {
    _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
    name: 'priya'
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
    _id: ObjectId("656367d5ac1455cd8c4d097a"),
    name: 'vijay',
    username: 'vijay1234',
    email: 'vijay@gmail.com',
    batch: 'b49',
    fees: 1500
  }
  {
    _id: ObjectId("656367d5ac1455cd8c4d097b"),
    name: 'suhan',
    username: 'suhan1234',
    email: 'suhan@gmail.com',
    batch: 'b48',
    fees: 500
  }


//usages of operators (not in )

  db.vijay.find({fees:{$nin:[500,1500]}})

  {
    _id: ObjectId("6561d0a8ab20a729c5b69d91"),
    name: 'priya',
    username: 'priya1234',
    email: 'vijaypriya@gmail.com',
    batch: 'be50',
    fees: 1000
  }
