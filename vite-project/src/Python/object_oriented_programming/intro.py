"""
Object oriented programming.
<JS ,Python ,C++ ,JAVA , etc>
______________________

Concept in programming to make
work easy. by using principles.
1.Encapsulation
   -keeping data and methods<functions> inside a class
   while restricting direct access to internal data.
2.Abstraction
   -Hiding uncessary complexity or implrtation of details.
   getters and setters. class methods
3.Inheritance
    -one class to reuse or extend propertie
     and methods of another class
4.Polymorphisim
   -appering in different forms. Method can
   have different behaviours.
_________________________

JS and python are object oriented.
→ number.toString() ,string.toLowerCase()
"""

"""
→ Class →
 -blueprint for an object.◇

→ Class could an architectural drawing of a house.
   object → implentaiton of the drawing.
"""
#is to have the name Capitalized
#fields <properties>
class House:
        bedrooms=3
        bathrooms=2
        floors =1
        area=120
        owner=""
        location=""
        architect="KIMANI"


        #js constructer
        def __init__(self, owner, location):
            print("Class house created. inititializer called")
            self.owner=owner
            self.location=location  


        def config(self, owner, location):
            self.owner=owner
            self.location=location

        def print_self(self):
              #this is to print the object and its properties
              print(self)
              print(self.__dict__)    

#When access object properties use dot notation
#Bracket notation is for dictionary

macrine_house=House(owner="Macrine", location="Kikiyu")



print(f"Macrines House Owner {macrine_house.owner}")
print(f"Macrines Location {macrine_house.location}")
print(f"Macrines House Bedrooms {macrine_house.bedrooms}")
print(f"Macrines House Bedrooms {macrine_house.bathrooms}")
print(f"Macrines House Bedrooms {macrine_house.floors}")
print(f"Macrines House Bedrooms {macrine_house.area}")
print(f"Macrines House Designer {macrine_house.architect}")
macrine_house.print_self()
print("end of print macrines")









daniel_house=House(owner="Daniel", location="Muranga")


print(f"Daniels House Owner {daniel_house.owner}")
print(f"Daniels Location {daniel_house.location}")
print(f"Daniels House Bedrooms {daniel_house.bedrooms}")
print(f"Daniels House Bathroom {daniel_house.bathrooms}")
print(f"Daniels House Floors {daniel_house.floors}")
print(f"Daniels House area {daniel_house.area}")
print(f"Daniels House Designer{daniel_house.architect}")
print(f"Printing daniels house")
daniel_house.print_self()
print("end of print daniel")

