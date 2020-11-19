import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
        product:[],
        loading:true
  }}
  componentDidMount(){
    firebase
    .firestore()
    .collection('products')
   // .where('price','>',1999)
   // .where('title','==','laptop')
   //.orderBy('qty')
    .onSnapshot((snapshot)=>{
      const product=snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    })
      this.setState({
        product:product,
        loading:false
      })
  })
  }
  /*componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then(snapshot => {
        const product = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ product: product, loading: false });
      });
  }*/
  

    addingproducts=(products)=>{
      const{product}=this.state;
      const index =product.indexOf(products);
      //product[index].qty+=1;
      //this.setState({product:product})
      const increaseit=firebase.firestore().collection('products').doc(product[index].id);
      increaseit
      .update({//promise
        qty:product[index].qty+1
      }).then(()=>{
        console.log("Succesful");
      }).catch((error)=>{
        console.log("Error ",error);
      })
    }
    subtractingproducts=(products)=>{
        const{product}=this.state;
        const index =product.indexOf(products);
        if(product[index].qty==0){
            return;}
       //product[index].qty-=1;
       // this.setState({product:product})
       const decreaseit=firebase.firestore().collection('products').doc(product[index].id);
      decreaseit
      .update({//promise
        qty:product[index].qty-1
      }).then(()=>{
        console.log("Succesful");
      }).catch((error)=>{
        console.log("Error ",error);
      })
    }
      deletingproducts=(id)=>{
        const{product}=this.state;
        //const item =product.filter((item)=>item.id!=id);
        //this.setState({
       //     product:item
       // })
       const deleteit=firebase.firestore().collection('products').doc(id);
      deleteit
      .delete().then(()=>{
        console.log("Succesful");
      }).catch((error)=>{
        console.log("Error ",error);
      })
      }
      getcartCount(){
        const {product}=this.state;
        let count=0;
        product.forEach((product)=>{
          count+=product.qty;
        })
        return count;
      }
      getTotal(){
        const{product}=this.state;
        let total=0;
        product.forEach((product)=>{
          total+=product.price*product.qty;
        })
        return total;
      }
      addmore=()=>{
        firebase
        .firestore()
        .collection("products")
        .add({ //promise
          img:"https://images-na.ssl-images-amazon.com/images/I/81e%2BAYbDELL._SL1500_.jpg",
          title:"Washing Machine",
          qty:1,
          price:39999
        })
        .then((docRef)=>{
          console.log("Success",docRef);
        })
        .catch((error)=>{
          console.log("Error",error);;
        })
      }
   render () {
     const {product,loading}=this.state
    return (
  <div className="App">
    <Navbar count={this.getcartCount()}/>
     <h1>Our Cart Page</h1>
       <Cart
         product={product}
         onIncrease={this.addingproducts}
         onDecrease={this.subtractingproducts}
         onDelete={this.deletingproducts}/>
         {loading && <h1>Loading Products...</h1>}
         <div style={{fontSize:30,padding:10}} >Total : {this.getTotal()}</div>
       </div>
     );
    }
}
export default App;
//<button onClick={this.addmore} style={{padding:20,fontSize:20}}>Add more products</button>