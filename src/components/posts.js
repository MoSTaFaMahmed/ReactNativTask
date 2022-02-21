import { Box, Text, Button, FlatList, VStack,Heading, View } from "native-base";
import { useContext, useEffect } from 'react';
import { getPosts } from '../actions';
import { PostsContext } from '../context';
import Post from "./post";
const Posts = (props) => {
   const { state, dispatch } = useContext(PostsContext);
   console.log(state);
     useEffect(() => {
          const resolveAction = async () => {
               dispatch(await getPosts());
             };
             resolveAction();
        },[])
     return (<VStack>
               <FlatList data={state.list} renderItem={
              ({item})=><Post item={item} {...props}/>
          } 
          ItemSeparatorComponent={()=><Box style={{margin:2,borderBottomWidth:2,borderBottomColor:'black'}}></Box> }/>
        </VStack>);
}
 
export default Posts;