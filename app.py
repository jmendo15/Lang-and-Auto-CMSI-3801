from flask import Flask, render_template, request

app = Flask(__name__)

git_users = []

git_users.append("jazzyfresh")
git_users.append("dondi")
git_users.append("rtoal")
git_users.append("julian")
git_users.append("nat")
git_users.append("tori")

group = {}
group["tori"] = "TA"

@app.route('/', methods =["GET"])
def index():
    return render_template('index.html', users=git_users)

# for user in git_users:
#     print(user)

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        node = Node(data, None)
        
        n = self.head
        while n.child !=None:
            n = n.child
        n.child = node

class Node:
    def __init__(self, data, child):
        self.data = data
        self.next = child
