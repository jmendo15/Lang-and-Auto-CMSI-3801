class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

def numsToLinkedList(numberString, head):
    linked_list = LinkedList()
    head = LinkedList.append(numberString[0])
    current = head
    for i in range(len(numberString) - 1):
        current.next = LinkedList.append(numberString[i + 1])
        current = current.next
    linked_list.display()
    
def print_(head):
 
    curr = head
    while (curr != None) :
     
        print ((curr.data), end = " - > " )
        curr = curr.next
     
# Driver code
numberString = "GEEKS"
head = None
head = numsToLinkedList(numberString, head)
print_(head)



# Example usage:
# linked_list = LinkedList()
# linked_list.append(1)
# linked_list.append(2)
# linked_list.append(3)

# linked_list.display()
