#object relational mapping ORM
#a programming technique for converting data between incompatile

class Inventory:
    def __init__(self, db):
        self.db = db

    def create_table(self):
        """Create the inventory table if it doesn't exist"""
        query = """
            CREATE TABLE IF NOT EXISTS inventory (
                id SERIAL PRIMARY KEY,
                name VARCHAR(250) NOT NULL,
                qty INTEGER NOT NULL,
                buying_price INTEGER NOT NULL,
                selling_price INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """

        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            print("Inventory table created successfully.")

    def add_item(self, name, qty, buying_price, selling_price):
        query = """
            INSERT INTO inventory (name, qty, buying_price, selling_price)
            VALUES (%s, %s, %s, %s);
        """

        with self.db.get_cursor() as cursor:
            cursor.execute(query, (name, qty, buying_price, selling_price))
            print(f"Item '{name}' added successfully.")

    def get_all_items(self):
        query = "SELECT * FROM inventory"

        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            items = cursor.fetchall()
            return items


if __name__ == "__main__":
    from db import Database

    db = Database()
    inventory = Inventory(db)

    inventory.create_table()
    inventory.add_item("Laptop", 10, 50, 80)

    items = inventory.get_all_items()
    print(items)
    