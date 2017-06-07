

/*
Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int pos = 190;    // variable to store the servo position
int input = 0;
int turn = 0;

void setup()
{
  myservo.attach(3);  // attaches the servo on pin 3 to the servo object
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop()
{
  while (input != 49) {
    input = Serial.read();
    Serial.println("hello");
    myservo.write(100);
  }
  Serial.println("yes!");
  digitalWrite(13, HIGH);

 if (turn == 0) {
  for (pos = 100; pos <= 190; pos += 1) {
    myservo.write(pos);
    delay(5);
  }
  }
  

  while (turn <= 6) {
    for(pos = 190; pos >= 100; pos -= 1) // goes from 0 degrees to 180 degrees
    {                                  // in steps of 1 degree
      myservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(7);                       // waits 15ms for the servo to reach the position
    }
    for(pos = 100; pos <=190; pos += 1)     // goes from 180 degrees to 0 degrees
    {
      myservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(7);                       // waits 15ms for the servo to reach the position
    }
    turn++;
  }

  if (turn == 7) {
    for(pos = 190; pos >= 100; pos -= 1) // goes from 0 degrees to 180 degrees
    {                                  // in steps of 1 degree
      myservo.write(pos);              // tell servo to go to position in variable 'pos'
      Serial.println("going");
      delay(7);                       // waits 15ms for the servo to reach the position
    }
    turn ++;
  }
 
  

  
}
