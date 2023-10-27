import csv
import random
from random import randrange

# Generiere 40 erfundene Restaurantnamen
restaurant_names = ["Sushi Bar", "Sakura Sushi", "Tokyo Sushi", "Sushi Express", "Ocean Sushi", "Sushi Garden", "Mikado Sushi", "Zen Sushi", "Yama Sushi", "Sushi World",
                   "Wasabi Sushi", "Sushi Palace", "Sushiro", "Sushi Station", "Sushi House", "Sushi Time", "Sushi Planet", "Sushi Boat", "Sushi Land", "Sushi Cove",
                   "Sushi Ninja", "Sushi Kingdom", "Sushi Bay", "Sushi Island", "Sushi Heaven", "Sushi Zenith", "Sushi Fusion", "Sushi Oasis", "Sushi Harbor", "Sushi Cove",
                   "Sushi Garden", "Sushi Fusion", "Sushi Harbor", "Sushi Island", "Sushi Kingdom", "Sushi Land", "Sushi Ninja", "Sushi Oasis", "Sushi Planet", "Sushi Zenith"]

# Generiere zufällige Mindestbestellwerte, Lieferzeiten und Lieferkosten für jedes Restaurant in 0,5-Schritten
restaurant_data = [["Restaurant Name", "Mindestbestellwert", "Lieferzeit (Minuten)", "Lieferkosten (EUR)", "Kategorie", "Typ"]]
for name in restaurant_names:
    min_bestellwert = round(random.uniform(15.0, 30.0) * 2) / 2
    lieferzeit = random.randint(40, 75)
    lieferkosten = round(random.uniform(3.0, 7.0) * 2) / 2
    typ = randrange(1, 4)
    if typ == 1:
        typ1 = "Rind"
    if typ == 2:
        typ1 = "Fisch"
    if typ == 3:
        typ1 = "Vegan"
    restaurant_data.append([name, min_bestellwert, lieferzeit, lieferkosten, "Sushi", typ1])
        
# Speichere die Daten in einer CSV-Datei
with open('sushi_restaurants.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(restaurant_data)

print("Die CSV-Datei wurde erstellt: sushi_restaurants.csv")