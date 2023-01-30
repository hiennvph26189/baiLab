import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput,Image,FlatList} from 'react-native';
import { useState } from 'react';
export default function App() {
 const [showView, setShowView] = useState(false);
 const productList = [
  {
      ten: "Nguyễn Văn A",
      masv: "PH26189" ,
      link: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
  },
  {
      ten: "Nguyễn Văn A",
      masv: "PH261890" ,
      link: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
  },
  {
      ten: "Nguyễn Văn A",
      masv: "PH261897" ,
      link: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
  },
  
];
  return (
    <View style={styles.container}>
        <View >
          <Text style={styles.content}>Họ và Tên: Nguyễn Văn Hiển</Text>
          <Text style={styles.content}>Mã SV: PH26189</Text>
        </View>
        <View style={styles.Button_add}>
            <Button
              title='Thêm mới' 
              onPress={() => setShowView(!showView)}
            />
        </View>
         {
        showView?
        <View style={styles.Input_text}>
            <TextInput
              style={styles.textInput}
              placeholder='Họ Và tên'
            />
            <TextInput
              style={styles.textInput}
              placeholder='Mã Sinh Viên'
            />
            <TextInput
              style={styles.textInput}
              placeholder='Link'
            />
            <View  style={styles.Button_add_2}>
                    <View  style={styles.huy}>
                      <Button  title='Hủy'/>
                    </View>
                    <View  style={styles.huy}>
                      <Button title='Lưu'/>
                    </View>
               
            </View>
        </View>
          :null
      }
      <View>
      <FlatList
            data={productList} 
            // item là giao diện trả về sau mỗi vòng lặp 
            renderItem={({item})=>(
                <View style={styles.listView}>
                    <Image style={{ width: 80, height: 80 ,borderRadius:100}} source={{ uri: item.link }} />
                    <View style={styles.listView_Text}>
                      <Text style={styles.ten}>Họ tên: {item.ten}</Text>
                      <Text style={styles.masv}>Mã SV: {item.masv} </Text>
                    </View>
                   
                    
                    
                </View>
            )}
            // key là giá trị duy nhất trả về sau mỗi vòng lặp
            keyExtractor={(item) => item.masv}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20
  },
  content:{
    fontSize:21,
  },
  Button_add:{
    marginTop:20,
    width:100,
  },
  Input_text:{
    marginTop:20,
    position:"relative",
    marginBottom:45
  },
  textInput:{
    borderWidth: 1,
    padding:7,
    borderRadius:5,
    marginTop: 10
  },
  Button_add_2:{
    position:'absolute',
    flexDirection: 'row',
    right: 0,
    bottom:-50
  },
  huy:{
    width:80,
    marginLeft:10
  },
  listView:{
    flexDirection: 'row',
    backgroundColor:'#F2F3F5',
    marginTop:20,
    borderRadius:5,
    padding:5
  },
  listView_Text:{
    justifyContent: 'center',
    padding:10
  },
  ten:{
    fontSize:17
  },
  masv:{
    fontSize:17,
    marginTop:6
  }
});
