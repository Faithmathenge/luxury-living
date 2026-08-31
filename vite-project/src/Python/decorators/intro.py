# are powerful tool for modifying or extending the behavior of functions or methods without changing their code
# a decorator function should take another function as an argument/parameter. it should have a wrapper function.
#to use a decorator you use @<decorator function> before function defination


def my_deco(func):
  def wrapper():
    print("Before we call the function")
    func()
    print("After we call the function")
  return wrapper 

def hello():
  print("Hello world function executes")
  print("Hello world")

@my_deco
def french_hello():
  print("french hello function")
  print("Bonjour World")

french_hello()    