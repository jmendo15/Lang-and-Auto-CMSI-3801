import mechanicalsoup
import pandas
import sqlite3

# download data w/ mechanical soup

url = "https://en.wikipedia.org/wiki/List_of_Game_Boy_games"
browser = mechanicalsoup.StatefulBrowser()
browser.open(url)

tables = browser.page.find_all("table")
td = tables[1].find_all("td")
game_data = [value.text.strip() for value in td]

print(game_data)

# parse the data 1/ mechanical soup

column_names = ["Title",
                "Developers",
                "Publishers",
                "Release_Japan",
                "Release_NorthAmerica",
                "Release_PALregion"
                ]

# load data into a DataFrame w/ pandas
# this gives our data a tabular structure

dictionary = {}

game_data[0:][::6]
game_data[1:][::6]

# load data from DataFrame into SQLite database