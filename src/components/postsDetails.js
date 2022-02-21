import {Box,HStack,Text, VStack} from 'native-base';
import { useContext, useEffect } from 'react';
import { getPostDetails,clearDetails } from '../actions';
import { PostsContext } from '../context';



const PostsDetails = ({route}) => {
  const {state,dispatch} = useContext(PostsContext)
  useEffect(()=>{
    const resolveAction = async () => {
        dispatch(await getPostDetails(route.params.id));
      };
      resolveAction();
      if(state.details.id)
    return ()=>{
        dispatch(clearDetails())
    }
},[])
     return <VStack style={{margin:10}}>
        <HStack style={{
         borderBottomWidth:2,
         borderBottomColor:'black',
         margin:5,
         display:'flex',
         flexDirection:'column'
     }}>
         <Text style={{fontWeight:'bold' ,fontSize:18,marginRight:2}}>
        Title
         </Text>
         <Text>
           { state.details.title }
         </Text>
     </HStack>
     <HStack style={{
         borderBottomWidth:2,
         borderBottomColor:'black',
         margin:5,
         display:'flex',
         flexDirection:'column'
     }}>
         <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
         Body
         </Text>
         <Text>
           { state.details.body }
         </Text>
     </HStack>
     
      
 </VStack>
 return <Text>Loading...</Text>
}
 
export default PostsDetails;