import 'package:flutter/material.dart';
import 'package:library_management/screen/student_login_screen.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Library Management"),
        centerTitle: true,
        backgroundColor: Colors.cyan,
      ),
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("For Student",style: TextStyle(fontSize: 25),),
            ElevatedButton(onPressed: (){
              Navigator.push(context, MaterialPageRoute(builder: (context)=>StudentLoginScreen(),),);
            },
                child: Text("LogIn/SignUp"),),

            // SizedBox(height: 20),
            //
            // Text("New Student SignUp here",style: TextStyle(fontSize: 25),),
            // ElevatedButton(onPressed: (){},
            //   child: Text("SignUp"),),

            SizedBox(height: 20),

            Text("For Admin",style: TextStyle(fontSize: 25),),
            ElevatedButton(onPressed: (){},
                child: Text("Admin Login"),),
          ],
        ),
      ),
    );
  }
}
