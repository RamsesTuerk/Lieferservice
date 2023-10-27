import csv
import random
from random import randrange

# Generiere 40 erfundene Restaurantnamen
restaurant_names = ["Pizza Hut", "Domino's Pizza", "Papa John's", "Little Caesars", "Marco's Pizza", "Hungry Howie's", "Jets Pizza", "Cicis Pizza", "Sbarro", "Blaze Pizza",
                   "Mellow Mushroom", "California Pizza Kitchen", "Round Table Pizza", "Uno Pizzeria & Grill", "Godfathers Pizza", "Papa Murphy's", "Donatos Pizza", "Imo's Pizza", "Grotto Pizza", "Mountain Mike's Pizza",
                   "Ledo Pizza", "MOD Pizza", "Old Chicago Pizza & Taproom", "Pizza Ranch", "Pieology Pizzeria", "Your Pie", "Bertucci's", "Rotolo's Pizzeria", "Pizza Inn", "Fox's Pizza Den",
                   "Pie Five Pizza", "Fazoli's", "CiCi's To Go", "Little Caesar's Express", "Topper's Pizza", "Pizza My Heart", "Mountain Mike's Pizza", "Figaro's Pizza", "Zpizza", "Russo's New York Pizzeria"]

# Generiere zufällige Mindestbestellwerte, Lieferzeiten und Lieferkosten für jedes Restaurant in 0,5-Schritten
restaurant_data = [["Restaurant Name", "Mindestbestellwert", "Lieferzeit (Minuten)", "Lieferkosten (EUR)", "Kategorie", "Typ", "Preis"]]
for name in restaurant_names:
    min_bestellwert = round(random.uniform(10.0, 20.0) * 2) / 2
    lieferzeit = random.randint(30, 60)
    lieferkosten = round(random.uniform(2.0, 6.0) * 2) / 2
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
    restaurant_data.append([name, min_bestellwert, lieferzeit, lieferkosten, "Pizza", typ1, preis])

# Speichere die Daten in einer CSV-Datei
with open('pizza_restaurants.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(restaurant_data)

print("Die CSV-Datei wurde erstellt: pizza_restaurants.csv")