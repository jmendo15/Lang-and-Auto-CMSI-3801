class CustomInheritor:
    def __init__(self, base_class):
        class DynamicClass(base_class):
            pass
        self.dynamic_class = DynamicClass

    def print_inheritance(self):
        print("DynamicClass inherits from:", self.dynamic_class.__bases__)

