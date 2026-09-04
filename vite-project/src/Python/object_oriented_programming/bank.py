"""
Abstraction
   -Hiding uncessary complexity or implrtation of details.
   Bank class --> deposits, withdrawal,show account balance
   getters and setters. class methods
   easy to scale function

"""

class BankAccount:
    clients=0
    bank_name="KCB"

    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self._account_no = account_no

    
    @property
    def balance(self):
        print("somebody tried to read johns balance")
        return self._balance

    
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return

        if value < 0:
            print("Ensure new balance must not be less than 0")
            return

        self._balance = value

    #setter
    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account no {self._account_no}")


john = BankAccount(name="John Mwangi", balance=0, account_no="223344556")

print("Bank Name",BankAccount.bank_name)
print(john._account_no)
print("Clients",BankAccount.clients)  #Class property
