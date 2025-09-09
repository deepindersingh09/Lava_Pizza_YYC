// By Ravneet Kaur
import React from "react"; 
import {useRouter} from "expo-router"; 
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function Profile(){
    const router = useRouter(); 
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity> 
                    <Ionicons name="arrow-back" size={28} color="black"/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Account</Text>
                <View style={{width: 30}}></View>
                {/* Empty space so that account text could stay centered */} 
            </View>

            {/* Profile Page */} 
            <View style={styles.profileSection}>
                <Image 
                    source={require("../../assets/images/profile_picture.png")}
                    style={styles.profilepicture} 
/>


                    <View style={styles.profileText}>
                        <View style={styles.nameRow}>
                            <Text style={styles.name}>Zaiden</Text>
                            <TouchableOpacity>
  <MaterialIcons name="edit" size={20} color="black" />
</TouchableOpacity>

                        </View>
                        <Text style={styles.email}>zaiden.45@gmail.com</Text>
                        <Text style={styles.phone}>8256981236</Text>
                    </View>
            </View>

            {/* Options */}
            <View style={styles.options}>
                {["Notifications", "General", "Payment", "Order History", "Update Delivery Info"].map(
                    (option, index) => (
                        <TouchableOpacity key={index} style={styles.optionRow}
                        onPress={() => {
                            if(option === "General") {
                                router.push("/general"); 
                            }
                        }}
                        
                        >
                            <Text style={styles.optionText}>{option}</Text>
                            <Ionicons name="chevron-forward" size={22} color="black"></Ionicons>
                        </TouchableOpacity>
                    )
                )}
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out of Account</Text>
            </TouchableOpacity>


        </View>
    ); 
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
        padding: 16,
        paddingTop: 40, 
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,  
    }, 

    backArrow: {
        fontSize: 30, 
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "bold", 
    },

    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30, 
    },

    profilepicture: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15, 
        marginLeft: 25, 
    },

    profileText: {
        flex: 1, 
        marginLeft: 10, 
    },

    nameRow: {
        flexDirection: "row",
        alignItems: "center",
    }, 

    name:{
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 8, 
        marginLeft: 2, 
    },
    
    editIcon: {
        fontSize: 16, 
    }, 
    
    email: {
        fontSize: 16, 
        fontWeight: "600", 
        marginLeft: 2, 
    },
    
    phone: {
        fontSize: 16,
        fontWeight: "600", 
        color: "gray", 
        marginLeft: 2, 
    },

    options: {
        borderTopWidth: 1,
        borderColor: "#ddd",
        marginBottom: 30, 
    },

    optionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        fontSize: 26, 
     
    },

    optionText: {
        fontSize: 16, 
    },

    arrow: {
        fontSize: 22,
        color: "black", 
        marginRight: 15, 
    },

    logoutButton: {
        backgroundColor: "#FFD700",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
    },

    logoutText: {
        fontSize: 16,
        fontWeight: "bold", 
    }, 

}); 