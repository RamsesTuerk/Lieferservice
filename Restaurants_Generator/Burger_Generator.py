import csv
import random
from random import randrange

# Generiere 40 erfundene Restaurantnamen
restaurant_names = ["Burger King", "McDonald's", "Wendy's", "Five Guys", "In-N-Out Burger", "Shake Shack", "Whataburger", "Sonic Drive-In", "Carl's Jr.", "Jack in the Box",
                   "White Castle", "Culver's", "Checkers & Rally's", "A&W Restaurants", "Smashburger", "Hardee's", "Krystal", "The Habit Burger Grill", "Elevation Burger", "Fuddruckers",
                   "Red Robin", "Wayback Burgers", "MOOYAH Burgers Fries & Shakes", "Big Boy", "Good Times Burgers & Frozen Custard", "Burgerville", "Back Yard Burgers", "FATZ", "Farmer Boys", "Braum's Ice Cream & Dairy Store",
                   "Ted's Montana Grill", "Lick's Homeburgers", "BGR - The Burger Joint", "Zinburger Wine & Burger Bar", "Bobby's Burger Palace", "Bareburger", "Bison Witches Bar & Deli", "Green Turtle", "Hickory's Famous Burgers", "The Counter"]

# Generiere zufällige Mindestbestellwerte, Lieferzeiten und Lieferkosten für jedes Restaurant in 0,5-Schritten
restaurant_data = [["Restaurant Name", "Mindestbestellwert", "Lieferzeit (Minuten)", "Lieferkosten (EUR)", "Kategorie", "Typ", "Preis"]]
for name in restaurant_names:
    min_bestellwert = round(random.uniform(8.0, 15.0) * 2) / 2
    lieferzeit = random.randint(20, 45)
    lieferkosten = round(random.uniform(2.0, 5.0) * 2) / 2
    typ = randrange(1, 4)
    if typ == 1:
        typ1 = "Rind"
    elif typ == 2:
        typ1 = "Gefluegel"
    elif typ == 3:
        typ1 = "Vegan"
    preis = randrange(1, 4)
    if preis == 1:
        preis = "Guenstig"
    elif preis == 2:
        preis = "Mittelpreisig"
    elif preis == 3:
        preis = "Teuer"

    restaurant_data.append([name, min_bestellwert, lieferzeit, lieferkosten, "Burger", typ1, preis])

# Speichere die Daten in einer CSV-Datei
with open('burger_restaurants.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(restaurant_data)

print("Die CSV-Datei wurde erstellt: burger_restaurants.csv")