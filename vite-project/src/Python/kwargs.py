def myKwargs(**kwargs):
  print("Kwargs is ",type(kwargs))
  print(kwargs)

myKwargs(a=23,b=30)

myKwargs(name="Faith", email="fay@gmail.com", dict={"a":"a"})

def area_rectangle(length,width):
  area=length*width
  print(f"For rectangle with length {length} and Width {width} are is {area}")

area_rectangle(5,2) #args
width=4
length=39
area_rectangle(width,length) #args
area_rectangle(width=width,length=length) #kwargs  
area_rectangle(width=10,length=55)
area_rectangle(width=10, length=55)
