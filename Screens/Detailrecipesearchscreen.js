import React, { useState,useMemo,useCallback,useRef, useEffect } from 'react';
import { View,StyleSheet, StatusBar,Text, FlatList,Image } from 'react-native';
import { create } from "apisauce";
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import colors from '../colors';
import { Avatar } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import CheckCircle from '../Svg/CheckCircle';
function Detailrecipesearchsreen({route}) {
    const [listings,setlistings]=useState([]);
    const [old_data,setold_data]=useState([]);
    const [testdata,settestdata]=useState(false);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo( () =>{ return ['63%', '96%']; }, []);
    const handleSheetChanges = useCallback( (index)=> {null
  }, []);
 
 const passeddata=route.params.item.id;
  
  const BottomSheetHandleComponent = () => { 
    return ( 
      <View style={{backgroundColor: 'white',flex:1,borderTopLeftRadius:15,borderTopRightRadius:15}}> 
         <View style={{backgroundColor: colors.Outline,marginBottom:15, alignSelf: 'center',
      width: (8 * 550) / 100,
      height: 6,
      borderRadius: 4,marginTop:8}} />  
      </View> 
    ); 
  };
  const Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
  const initialMessages = [
    {
      id: 1,
      title: "Pancake",
      description: "Food",
      image: require("../assets/Rectangle_188.png"),
    },
    {
      id: 2,
      title: "Food2",
      description: "Food",
      image: require("../assets/image2.png"),
    },
    {
        id: 3,
        title: "Food3",
        description: "Food",
        image: require("../assets/Rectangle_188.png"),
      },
      {
        id: 4,
        title: "Food4",
        description: "Food",
        image: require("../assets/image3.png"),
      },
  ];
//forcomponentdidupdate(dependent on dependency)
  useEffect(()=>{
    loadlistings();
    
  },[])

  //for componentdidmount(after rendering whole component)
  useEffect(()=>{
 setTimeout(() => {
  (settestdata(true))
 }, 2000);
  })
    const loadlistings=async()=>{
        // const response= await listingsApi.getlistings2(); 
       // setflatlisttobeshown(true);
        const apiClient=create({
         baseURL:'https://api.spoonacular.com',
         headers:{"Content-Type":'application/json'}
       });
       //for recipe ingredients
        const endpoint122=`/recipes/${passeddata}/information?apiKey=7eeb845f50414c4aa997f923b0684079&includeNutrition=false`
         const response = await apiClient.get(endpoint122);
        // console.log(response.data);
        
         setlistings(response.data);
       }

       const data = {
        code: 42,
        items: [{
            id: 1,
            name: 'foo'
        }, {
            id: 2,
            name: 'bar'
        }]
    };
    const testforitem=listings.extendedIngredients;
        var findObjectByLabel = function(obj, label) {
          if(obj.label === label) { return obj; }
          for(var i in obj) {
              if(obj.hasOwnProperty(i)){
                  var foundLabel = findObjectByLabel(obj[i], label);
                  if(foundLabel) { return foundLabel; }
              }
          }
          return null;
      };
      
        //  const loading_view=()=>{
        //    return(
             
        //    )
        //  }  
         const fortest=()=>{
          setTimeout(() => {
            loading_view()
          }, 5000)
        }
   return (
  <View style={styles.container} >
    {/* {console.log(listings.analyzedInstructions.map(items=>items.steps.map(items2=>items2.step)))} */}
    {/* {console.log(listings.extendedIngredients.map(item=>item.nameClean))} */}
    <Image source={{uri:listings.image}} 
    resizeMode="contain"
    style={{width:"200%",height:299,alignSelf:"center",borderRadius:20}}/>

<BottomSheet
        
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        animateOnMount={true} 
        onChange={handleSheetChanges}
         handleComponent={BottomSheetHandleComponent}
      >
        <BottomSheetScrollView style={{flex:1}}>
<View style={{margin:15}}>
<Text style={{fontWeight:"bold",fontSize:17,color:"#3E5481"}} >{listings.title}</Text>
<Text style={{color:"#9FA5C0",marginTop:8}}>Food *  {listings.readyInMinutes+" mins"}</Text>
</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Avatar.Image style={{marginLeft:18,marginTop:15}} size={31} source={require('../assets/avatar2.png')} />
<Text style={{marginTop:15,marginLeft:15,color:"#3E5481"}}>{listings.sourceName}</Text>
<Ionicons style={{marginLeft:150,marginTop:15}} name={"heart-circle-outline"} size={31} color={colors.primary}/>
<Text style={{marginTop:13,marginLeft:3,color:"#3E5481"}}>{listings.aggregateLikes+" Likes"}</Text>
</View>
<View style={{borderWidth:1,borderColor:colors.Outline,margin:22,bottom:4}}/>
<Text style={{color:"#3E5481",marginLeft:28,fontSize:17,bottom:14}}>Description</Text>
<Text style={{padding:25,bottom:22,marginLeft:4 ,color:colors.Secondary_Text}}>{listings.summary}</Text>
<View style={{borderWidth:1,borderColor:colors.Outline,margin:33,bottom:18}}/>
<Text style={{color:"#3E5481",marginLeft:28,fontSize:17}}>Ingredients</Text>
 { testdata==true ?<View>
            {listings.extendedIngredients.map(items233=><View style={{flexDirection:"row",padding:5,marginLeft:28,paddingTop:18}}>
            <CheckCircle/>
          <Text  style={{marginLeft:5,color:colors.Main_Text}}>{items233.nameClean}</Text>
      
          <Text  numberOfLines={8} style={{marginLeft:45,paddingRight:105,color:colors.Main_Text,marginRight:75}}>{items233.original}</Text>
          </View>)}
          <View style={{borderWidth:1,borderColor:colors.Outline,margin:33,bottom:4}}/>
      <Text style={{color:"#3E5481",marginLeft:28,fontSize:17}}>Steps</Text>
          {listings.analyzedInstructions.map(items=>items.steps.map(items2=><View  style={{flexDirection:"row",padding:15,marginRight:25,marginLeft:5}}>
          <Text style={{width: 25,
          height: 25,
          borderRadius: 25 / 2,
          backgroundColor: colors.Main_Text,color:colors.white,textAlign:"center",paddingTop:2}}>{items2.number}</Text>
          <Text style={{marginLeft:5,color:colors.Main_Text,textAlign:"left"}}>{items2.step}</Text>
          </View>))}
          </View>:null  }
{/* <FlatList
      data={testforitem}
      keyExtractor={(item22)=>}
      renderItem={({item44})=>{
        {
          return (<View>
            <Text>{item44.id}</Text>
          </View>)
        }
      }
      }
      /> */}
</BottomSheetScrollView>
      </BottomSheet>
      
      {/* {console.log("from console"+JSON.stringify(listings))} */}
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? 0 : 0,
  
       height:1000
       ,flex:1
  },
});
export default Detailrecipesearchsreen;