import {View,Text,StyleSheet,Pressable,Alert,ScrollView,FlatList} from 'react-native';
import { useState,useEffect } from 'react';
import WelcomeMessage from '../../components/WelcomeMessage';
import UserCard from '@/src/components/UserCard';
import Button from '@/src/components/Button';
import SearchInput from '@/src/components/SearchInput';
import ProductCard from '@/src/components/ProductCard';
import { router } from 'expo-router';
import { Link } from 'expo-router';

export default function HomeScreen(){

  const [count,setCount]=useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState('');

//   const products = [
//     {
//         id: 1,
//         title: 'iPhone',
//         price: 80000,
//         image: 'https://picsum.photos/300/200?1'
//     },
//     {
//         id: 2,
//         title: 'Samsung',
//         price: 70000,
//         image: 'https://picsum.photos/300/200?2'
//     },
//     {
//         id: 3,
//         title: 'Google Pixel',
//         price: 90000,
//         image: 'https://picsum.photos/300/200?3'
//     },
//     {
//         id: 4,
//         title: 'OnePlus',
//         price: 50000,
//         image: 'https://picsum.photos/300/200?4'
//     }
// ];

const fetchProducts= async()=>{
  try {
    setLoading(true);
    const response=await fetch('https://dummyjson.com/products');
    const data=await response.json();
    //console.log(data);
    setProducts(data.products);
  } catch (error) {
    setError('Failed to load products');
  } finally {
    setLoading(false);
  } 
};


useEffect(() => {
  fetchProducts();
}, [])

  if (loading) {
    return (
        <View style={styles.container}>
            <Text>Loading products...</Text>
        </View>
    );
}
if (error) {
    return (
        <View style={styles.container}>
            <Text>{error}</Text>
        </View>
    );
}
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>My React Native App</Text>
      <WelcomeMessage name="Siddhant"/>
      <Text style={styles.subtitle}>React native + expo</Text>
      <SearchInput/> */}
      {/* <Text>lets start building</Text> */}
      {/* <Pressable 
        style={styles.button}
        onPress={()=>setCount(count+1)} 
      >
        <Text>Get started</Text>
      </Pressable> */}
      {/* <Button 
        title="Get Started"
        variant='primary'
        onPress={()=>setCount(count+1)}
      />
      <Button
        title="Cancel"
        variant="secondary"
        onPress={() => console.log('Cancelled')}
      />
      <Text>button clicked:{count}</Text>
      <UserCard name="Siddhant" age={21}/>
      <UserCard name="Rahul" age={21}/> */}
      {/* <Text style={styles.title}>My Products</Text> */}

      <Pressable 
        style={styles.button}
        onPress={()=>router.push('/products')}
      >
        <Text>View Products</Text>
      </Pressable>

      {/* <Pressable style={styles.button}onPress={() => router.push('/profile')}>
        <Text>Profile</Text>
      </Pressable> */}

      {/* <Link href={"/profile"}>
        <Text>Profile</Text>
      </Link> */}

      {/* <Button
        title="Fetch Products"
        variant="primary"
        onPress={fetchProducts}
      /> */}

      

      <FlatList
        data={products}
        numColumns={2}
         ListHeaderComponent={
          <Text style={styles.title}>
            My Products
          </Text>
        }
        ListEmptyComponent={
          <Text>No products found</Text>
        }
        contentContainerStyle={styles.list}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <ProductCard
              title={item.title}
              price={item.price}
              image={item.thumbnail}
              onPress={()=>router.push(`/product/${item.id}`)}
            />
        )}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:15,
    // flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
  },
  subtitle:{
    fontSize:16,
    marginTop:10,
    fontWeight:'bold'
  },
  button:{
    marginTop:10,
    padding:8,
    borderWidth:1,
    borderColor:'black',
  },
  list:{
    paddingVertical:10,
  }
})