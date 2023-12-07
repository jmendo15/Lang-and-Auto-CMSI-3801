class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

def delete_middle_node(node):
    if node is None or node.next is None:
        return False 

    next_node = node.next
    node.data = next_node.data
    node.next = next_node.next
    return True

# Example usage:
# Create a linked list: a -> b -> c -> d -> e -> f

a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

delete_middle_node(c)

# Resulting linked list: a -> b -> d -> e -> f