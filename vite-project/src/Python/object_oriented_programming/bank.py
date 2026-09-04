"""
Abstraction
   -Hiding uncessary complexity or implrtation of details.
   Bank class --> deposits, withdrawal,show account balance
   getters and setters. class methods
   easy to scale function

"""

class BankAccount:
    clients=0 #static p
    bank_name="KCB"  #static property

    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self._account_no = account_no
        BankAccount.add_client() #class method
    
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

        # Static Method. <class methods> @staticmethod ->
#
    @staticmethod
    def calculate_interest(amount, year):
         rate = 10
         interest_per_year = amount * (rate / 100)
         interest_total = interest_per_year * year
         total = amount + interest_total
         print(f"If you take a loan. of ${amount}, interest rate per year {interest_per_year}")
         print(f"Total interest {interest_total}, total to pay {total} after {year}")

#
#Class Method. <>
#class itself.
#
    @classmethod
    def add_client(cls):
        cls.clients = cls.clients + 1


john = BankAccount(name="John Mwangi", balance=0, account_no="223344223")
print("Total clients", BankAccount.clients)

samel = BankAccount(name="Samuel", balance=0, account_no="223344223")
print("Total clients", BankAccount.clients)

BankAccount.calculate_interest(5000, 3)


