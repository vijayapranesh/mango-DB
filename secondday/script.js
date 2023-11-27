  
  
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


//usages of operators (not in )

db.vijay.find({_id:{$in:[ObjectId("656367d5ac1455cd8c4d097a"),ObjectId("656367d5ac1455cd8c4d097b")]}})

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




  // modified

  db.vijay.find()


  {
    _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
    name: 'rajini',
    batch: 'b49',
    email: 'rajini@gmail.com',
    fees: 2000,
    username: 'rajini1234'
  }
  {
    _id: ObjectId("6561d0a8ab20a729c5b69d91"),
    name: 'priya',
    username: 'priya1234',
    email: 'vijaypriya@gmail.com',
    batch: 'b50',
    fees: 1000
  }
  {
    _id: ObjectId("6561d0a8ab20a729c5b69d93"),
    name: 'siva',
    username: 'siva1234',
    email: 'siva@gmail.com',
    batch: 'b50',
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



//usages of operators ( and )

  db.vijay.find({$and:[
    {batch:{$eq:'b48'}},
    {fees:{$eq:500}}
  ]}) 

  {
    _id: ObjectId("656367d5ac1455cd8c4d097b"),
    name: 'suhan',
    username: 'suhan1234',
    email: 'suhan@gmail.com',
    batch: 'b48',
    fees: 500
  }





  
//usages of operators ( or )

db.vijay.find({$or:[
  {batch:{eq:'b48'}},
  {batch:{$eq:"b49"}}
]})

{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,
  username: 'rajini1234'
}
{
  _id: ObjectId("656367d5ac1455cd8c4d097a"),
  name: 'vijay',
  username: 'vijay1234',
  email: 'vijay@gmail.com',
  batch: 'b49',
  fees: 1500
}



//usages of operators ( nor ) opposite of or

db.vijay.find({$nor:[
  {batch:{$eq:'b50'}},
  {batch:{$eq:'b48'}}
]})

{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,
  username: 'rajini1234'
}
{
  _id: ObjectId("656367d5ac1455cd8c4d097a"),
  name: 'vijay',
  username: 'vijay1234',
  email: 'vijay@gmail.com',
  batch: 'b49',
  fees: 1500
}



//usages of operators ( not ) inverse of and   (or)    not equal $ne


db.vijay.find({batch:{$not:{$eq:'b50'}}})
{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,
  username: 'rajini1234'
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

 
// get the data of (@gmail.com) by using /.*????*./
 
db.vijay.find({email:/.*gmail.com*./})
{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,
  username: 'rajini1234'
}... ... ... ... 

  

//get the data by particular key ($exists)

db.vijay.find({price:{$exists:1}})      (1=true, 0=false)

{
  _id: ObjectId("656367d5ac1455cd8c4d097b"),
  name: 'suhan',
  username: 'suhan1234',
  email: 'suhan@gmail.com',
  batch: 'b48',
  fees: 500,
  price: 300  <---
}


db.vijay.find({price:{$exists:0}})

{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,
  username: 'rajini1234'
}... ... ... 



//projectioning method

db.vijay.find({},{name:1,fees:1,_id:0})
{
  name: 'rajini',
  fees: 2000
}... ... ... ...



db.vijay.find().limit(3)      <-----
{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,
  username: 'rajini1234'
}... ...


db.vijay.find().limit(3).skip(2)     <-----
{
  _id: ObjectId("6561d0a8ab20a729c5b69d93"),
  name: 'siva',
  username: 'siva1234',
  email: 'siva@gmail.com',
  batch: 'b50',
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
  fees: 500,
  price: 300
}



db.vijay.find().count()
5


db.vijay.find().sort({name:1})
A-Z

db.vijay.find().sort({name:-1})
Z-A

db.vijay.find().sort({batch:1,fees:1})
{
  _id: ObjectId("656367d5ac1455cd8c4d097b"),
  name: 'suhan',
  username: 'suhan1234',
  email: 'suhan@gmail.com',
  batch: 'b48',
  fees: 500,      
  price: 300
}
{
  _id: ObjectId("656367d5ac1455cd8c4d097a"),
  name: 'vijay',
  username: 'vijay1234',
  email: 'vijay@gmail.com',
  batch: 'b49',
  fees: 1500       <---1
}
{
  _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
  name: 'rajini',
  batch: 'b49',
  email: 'rajini@gmail.com',
  fees: 2000,           <---2
  username: 'rajini1234'
}
{
  _id: ObjectId("6561d0a8ab20a729c5b69d93"),
  name: 'siva',
  username: 'siva1234',
  email: 'siva@gmail.com',
  batch: 'b50',
  fees: 500      <---1
}
{
  _id: ObjectId("6561d0a8ab20a729c5b69d91"),
  name: 'priya',
  username: 'priya1234',
  email: 'vijaypriya@gmail.com',
  batch: 'b50',
  fees: 1000        <---2
}



// forEach method

db.vijay.find().forEach(function(e){
  console.log(e.name)
  })
  rajini
  priya
  siva
  vijay
  suhan


  db.vijay.find().sort({name:1}).forEach(function(e){
    console.log(e.name)
    })
    priya
    rajini
    siva
    suhan
    vijay

     
    // map method

    db.vijay.find().map(function(e){
      return e.name
      })
      'rajini'
      'priya'
      'siva'
      'vijay'
      'suhan'



      db.vijay.find().map(function(e){
        return e.name
        }).toArray()

        [ 'rajini', 'priya', 'siva', 'vijay', 'suhan' ]




        db.vijay.find().map(function(e){
          return {'name':e.name,'email':e.email}
          }).toArray()


        [
          { name: 'rajini', email: 'rajini@gmail.com' },
          { name: 'priya', email: 'vijaypriya@gmail.com' },
          { name: 'siva', email: 'siva@gmail.com' },
          { name: 'vijay', email: 'vijay@gmail.com' },
          { name: 'suhan', email: 'suhan@gmail.com' }
        ]



        // making a new collection using previous array of object

        db.student.insertMany(  db.vijay.find().map(function(e){
          return {'name':e.name,'email':e.email}
          }).toArray()
           )

        {
          acknowledged: true,
          insertedIds: {
            '0': ObjectId("656464d2e049f4396181aad3"),
            '1': ObjectId("656464d2e049f4396181aad4"),
            '2': ObjectId("656464d2e049f4396181aad5"),
            '3': ObjectId("656464d2e049f4396181aad6"),
            '4': ObjectId("656464d2e049f4396181aad7")
          }
        }




// aggregate is a function where can write multiple quries  (joining collections--> ex-lockUp,group)


db.vijay.aggregate([
  {
	$group:{
_id:"$batch",
count:{$count:{}}
         }
	}

])

{
_id: 'b49',
count: 2
}
{
  _id: 'b48',
  count: 1
}
{
  _id: 'b50',
  count: 2
}


db.vijay.aggregate([
  {
	$group:{
_id:"$fees",
count:{$count:{}}
         }
	}

])

{
  _id: 1000,
  count: 1
}
{
  _id: 500,
  count: 2
}
{
  _id: 1500,
  count: 1
}
{
  _id: 2000,
  count: 1
}





db.student.aggregate({
  $lookup:{
  from:"vijay",
  localField:"email",
  foreignField:"email",
  as:"details"
  }
  })

  {
    _id: ObjectId("656464d2e049f4396181aad3"),
    name: 'rajini',
    email: 'rajini@gmail.com',
    details: [
      {
        _id: ObjectId("6561c9e2ab20a729c5b69d8e"),
        name: 'rajini',
        batch: 'b49',
        email: 'rajini@gmail.com',
        fees: 2000,
        username: 'rajini1234'
      }
    ]
  }

  {
    _id: ObjectId("656464d2e049f4396181aad4"),
    name: 'priya',
    email: 'vijaypriya@gmail.com',
    details: [
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d91"),
        name: 'priya',
        username: 'priya1234',
        email: 'vijaypriya@gmail.com',
        batch: 'b50',
        fees: 1000
      }
    ]
  }

  {
    _id: ObjectId("656464d2e049f4396181aad5"),
    name: 'siva',
    email: 'siva@gmail.com',
    details: [
      {
        _id: ObjectId("6561d0a8ab20a729c5b69d93"),
        name: 'siva',
        username: 'siva1234',
        email: 'siva@gmail.com',
        batch: 'b50',
        fees: 500
      }
    ]
  }

  {
    _id: ObjectId("656464d2e049f4396181aad6"),
    name: 'vijay',
    email: 'vijay@gmail.com',
    details: [
      {
        _id: ObjectId("656367d5ac1455cd8c4d097a"),
        name: 'vijay',
        username: 'vijay1234',
        email: 'vijay@gmail.com',
        batch: 'b49',
        fees: 1500
      }
    ]
  }

  {
    _id: ObjectId("656464d2e049f4396181aad7"),
    name: 'suhan',
    email: 'suhan@gmail.com',
    details: [
      {
        _id: ObjectId("656367d5ac1455cd8c4d097b"),
        name: 'suhan',
        username: 'suhan1234',
        email: 'suhan@gmail.com',
        batch: 'b48',
        fees: 500,
        price: 300
      }
    ]
  }