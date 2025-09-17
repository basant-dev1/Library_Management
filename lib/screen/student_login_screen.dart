import 'package:flutter/material.dart';

class StudentLoginScreen extends StatefulWidget {
  const StudentLoginScreen({super.key});

  @override
  State<StudentLoginScreen> createState() => _StudentLoginScreen();
}

class _StudentLoginScreen extends State<StudentLoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Welcome Back"),
        centerTitle: true,
        backgroundColor: Colors.blueGrey,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Student"),
            Container(
              decoration: BoxDecoration(borderRadius: BorderRadius.circular(500),color: Colors.grey),
              padding: EdgeInsets.all(15),
              height: 500,
              width: 500,
              // color: Colors.grey,
              child: Form(
                child: Column(
                  children: [
                    Image.asset("assets/img.png"),

                    SizedBox(height: 10),
                    TextFormField(
                      keyboardType: TextInputType.number,
                      decoration: InputDecoration(
                        prefixIcon: Icon(Icons.numbers),
                        hintText: "Id No",
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                        ),
                      ),
                    ),

                    SizedBox(height: 10),
                    TextFormField(
                      keyboardType: TextInputType.number,
                      decoration: InputDecoration(
                        prefixIcon: Icon(Icons.numbers),
                        hintText: "Roll No",
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                        ),
                      ),
                    ),

                    SizedBox(height: 10),

                    TextFormField(
                      decoration: InputDecoration(
                        hintText: "Branch",
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                        ),
                      ),
                    ),

                    SizedBox(height: 10),

                    ElevatedButton(
                      onPressed: () {},
                      child: Text("LogIn", style: TextStyle(fontSize: 40)),
                    ),
                    Text("if you don't have an account",style: TextStyle(fontSize:18),),
                        TextButton(onPressed: (){},
                            child: Text("Create Account",style: TextStyle(fontSize:20),),),



                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
