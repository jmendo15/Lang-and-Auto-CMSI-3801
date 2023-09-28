class Node:
    def __init__(self, data, next):
        self.data = None
        self.next = None

#singly linked list
class LinkedList:
    def __init__(self):
        self.head = None

    def append(self,data):
        none = Node(data, None)
        if self.head == None:
            self.head = Node
        else:
            temp = self.head
            while temp.next != None:
                temp = temp.next
            temp.next = Node 
    
#-------hypothetical solution if problem was more practical-------

    # def delete(self, data):
    #     temp = self.head
    #     while  temp.next != None:
    #         if temp.data == data:
    #                 temp.next = temp.next.next
    #                 #delete node
    #         temp = temp.next
#-> (a) -> (b) -> (c) -> (d) -> (e) -> |NULL|  
#                  ^          

# ----------actual solution----------
# not actually deleting middle node, you're moving the data over one and deleting the last node when you get to it
# -> (a) -> (b) -> (d) -> (e) -> |NULL|  

def delete_middle(Node):
    temp = Node
    while temp.next != None:
        temp.data = temp.next.data
        if temp.next.next == Node:
            temp.next = Node
        temp = temp.next
    return Node



l = LinkedList()
l.append('a')
l.append('b')
l.append('c')
l.append('d')
l.append('e')