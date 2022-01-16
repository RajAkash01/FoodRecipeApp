import React, { useCallback, useEffect, useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import NewListingButton from '../NewListingButton';
import { View,StyleSheet, StatusBar,TouchableOpacity, Text,Image,Alert} from 'react-native';
import { Portal, PortalHost } from '@gorhom/portal';
import { Camera } from 'expo-camera';
import FoodScanimg from '../Svg/FoodScanimg';
import * as ImagePicker from 'expo-image-picker';
import {
  TouchableOpacity  as Touchme,
  TouchableHighlight,
  TouchableWithoutFeedback,
  BottomSheetView
} from '@gorhom/bottom-sheet';
function Bottomsheetfornav({focused}) {

  

   const [Image2,setImage]=useState("");
   const [uploading,setuploading]=useState(false);
   const [googleResponse,setgoogleResponse]=useState(null);
  //  useEffect(async()=>{
  //   const permission = await Camera.requestPermissionsAsync();  
  //  },[])
  // const submitToGoogle=async()=>{
  //   try {
  //     setuploading(true);
  //     //this.setState({ uploading: true });
  //     let { image } = this.state;
  //     let body = JSON.stringify({
  //       requests: [
  //         {
  //           features: [
  //             { type: "LABEL_DETECTION", maxResults: 10 },
  //             { type: "LANDMARK_DETECTION", maxResults: 5 },
  //             { type: "FACE_DETECTION", maxResults: 5 },
  //             { type: "LOGO_DETECTION", maxResults: 5 },
  //             { type: "TEXT_DETECTION", maxResults: 5 },
  //             { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
  //             { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
  //             { type: "IMAGE_PROPERTIES", maxResults: 5 },
  //             { type: "CROP_HINTS", maxResults: 5 },
  //             { type: "WEB_DETECTION", maxResults: 5 }
  //           ],
  //           image: {
  //             source: {
  //               imageUri: image
  //             }
  //           }
  //         }
  //       ]
  //     });
  //     let response = await fetch(
  //       "https://vision.googleapis.com/v1/images:annotate?key=" +
  //         Environment["AIzaSyDJq6ixLcTPx249mPaTy_8z6ecxxAWnH2A"],
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         method: "POST",
  //         body: body
  //       }
  //     );
  //     let responseJson = await response.json();
  //     console.log(responseJson);
  //     setgoogleResponse(responseJson);
  //     setuploading(false);
  //     // this.setState({
  //     //   googleResponse: responseJson,
  //     //   uploading: false
  //     // });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(()=>{
    async()=>{
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  },[])
 
  


  const takePhoto = async () => {
		let pickerResult = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});
		handleImagePicked(pickerResult);
	};
  const pickImage2 = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    handleImagePicked(pickerResult);
    console.log(pickerResult);
   await console.log("from googleresponse "+Image2);
    if(Image2!=undefined){
      retrivedatafromgoogle();
      submitToGoogle();
    }

  }
 const  pickImage = async () => {
		let pickerResult = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});

		handleImagePicked(pickerResult);
	};
 const handleImagePicked = async pickerResult => {
		try {
			// this.setState({ uploading: true });

			if (!pickerResult.cancelled) {
				setImage(pickerResult.uri);
			
			}
		} catch (e) {
			console.log(e);
			alert('Error, sorry :(');
		} finally {
			setuploading(false);
		}
	};
  const retrivedatafromgoogle=async()=>{
    console.log("from inside google response "+ Image2);
    try {
			//this.setState({ uploading: true });
      
			let { image } = Image2;
			let body = JSON.stringify({
				requests: [
					{
						features: [
							{ type: 'LABEL_DETECTION', maxResults: 10 },
							{ type: 'LANDMARK_DETECTION', maxResults: 5 },
							{ type: 'FACE_DETECTION', maxResults: 5 },
							{ type: 'LOGO_DETECTION', maxResults: 5 },
							{ type: 'TEXT_DETECTION', maxResults: 5 },
							{ type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
							{ type: 'SAFE_SEARCH_DETECTION', maxResults: 5 },
							{ type: 'IMAGE_PROPERTIES', maxResults: 5 },
							{ type: 'CROP_HINTS', maxResults: 5 },
							{ type: 'WEB_DETECTION', maxResults: 5 }
						],
						image: {
							source: {
								imageUri: image
							}
						}
					}
				]
			});
			let response = await fetch(
				'https://vision.googleapis.com/v1/images:annotate?key=' +
					'AIzaSyDJq6ixLcTPx249mPaTy_8z6ecxxAWnH2A',
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: body
				}
			);
			let responseJson = await response.json();
			console.log(responseJson);
      setgoogleResponse(responseJson);
      setuploading(false);
			// this.setState({
			// 	googleResponse: responseJson,
			// 	uploading: false
			// });
		} catch (error) {
			console.log(error);
		}
  }
  const submitToGoogle = async () => {
		
	};
 const maybeRenderUploadingOverlay = () => {
		if (uploading) {
			return (
				<View
					style={[
						StyleSheet.absoluteFill,
						{
							backgroundColor: 'rgba(0,0,0,0.4)',
							alignItems: 'center',
							justifyContent: 'center'
						}
					]}
				>
					<ActivityIndicator color="#fff" animating size="large" />
				</View>
			);
		}
	};

    const bottomSheetRef = useRef(null); 
    const snapPoints = useMemo( () =>{ return ['0%', '40%']; }, []);
  const handleSheetChanges = useCallback( (index)=> {null
}, []);
   return (
  <View style={styles.container}  >
       <NewListingButton focused={focused} onPress={()=>bottomSheetRef.current.snapTo(1)}  />
       <Portal>
       <BottomSheet
       
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        activeOffsetY={[-1, 1]} 
        failOffsetX={[-5, 5]} 
        animateOnMount={true} 
        onChange={handleSheetChanges}
        
      >
         <View  >

           <Text style={{color:"#3E5481",fontWeight:"bold",alignSelf:"center",fontSize:17,top:1}}>Choose one option</Text>
           <View style={{width:188,top:19.2,left:2}}>
           <Touchme onPress={()=>pickImage2()} style={{borderWidth:1,borderColor:"#D0DBEA",left:2,top:1,width:185,height:240,borderRadius:10}} >
                   
                     <Image resizeMode="contain" source={require("../assets/FoodScanimg.png")}
           style={{alignSelf:"center",borderRadius:10,top:5,width:150,height:200}}/>
           <Text style={{alignSelf:"center",color:"#3E5481",fontWeight:"bold"}}>Food</Text>
  
          </Touchme>
         </View>
         <View style={{bottom:219.5,width:188,height:239,left:195}}>
          <Touchme  onPress={()=>pickImage2()} style={{borderWidth:1,borderColor:"#D0DBEA",width:185,height:240,borderRadius:10,left:1}} >
          
          <Image resizeMode="contain" source={require("../assets/FoodScanimg2.png")}
           style={{alignSelf:"center",borderRadius:10,width:150,height:200}}/>
           <Text style={{alignSelf:"center",color:"#3E5481",fontWeight:"bold"}}>Ingredients</Text>
            
          </Touchme>
          </View>
          {maybeRenderUploadingOverlay()}
          </View>
      </BottomSheet>
      </Portal>
      <PortalHost name="custom_host" />
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default Bottomsheetfornav;