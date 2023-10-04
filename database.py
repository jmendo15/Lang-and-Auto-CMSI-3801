import mechanicalsoup
import pandas
import sqlite3

# download data w/ mechanical soup

url = "https://en.wikipedia.org/wiki/List_of_Game_Boy_games"
browser = mechanicalsoup.StatefulBrowser()
browser.open(url)

td = browser.page.find_all("td")

print()