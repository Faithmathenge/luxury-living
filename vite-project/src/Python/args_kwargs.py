def args_kwargs(*args,**kwargs):
  print("____________________________")
  print("All args", args)
  print("All kwargs", kwargs)
  print("________________________________")

  #error args_kwargs(a=2, 45)
args_kwargs(45,39, a=2,b=30,)
