import { Text, Box, HStack, VStack, ArrowForwardIcon } from "native-base"
const Post = ({ item, navigation }) => {
     if (item.id) {
          return (
               <Box>
                    <HStack style={{ justifyContent: "space-between", margin: 3 }}>
                         <VStack>
                              <Text>
                                   <Text style={{ fontWeight: 'bold', color: 'green' }}>

                                        Title:
                                   </Text>

                                   {item.title}
                              </Text>

                         </VStack>
                         <ArrowForwardIcon onPress={() => {
                              navigation.navigate({
                                   name: 'postsdetails', params: {
                                        id: item.id
                                   }
                              })
                         }} />
                    </HStack>
               </Box>)

     }

     return <Text>No Post</Text>
}
export default Post;