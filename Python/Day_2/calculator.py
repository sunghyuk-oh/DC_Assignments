int1 = int(input("Enter the first integer: "))
operand = input("Enter the operand (+, -, *, /): ")
int2 = int(input("Enter the second integer: "))

def addition(n1, n2):
  return n1 + n2

def subtraction(n1, n2):
  return n1 - n2

def multiplication(n1, n2):
  return n1 * n2

def division(n1, n2):
  return n1 / n2

def perform_math_operation(n1, oprnd, n2):
    if oprnd == "+":
        total = addition(n1, n2)
    elif oprnd == "-":
        total = subtraction(n1, n2)
    elif oprnd == "*":
        total = multiplication(n1, n2)
    elif oprnd == "/":
        total = division(n1, n2)
    
    print(total)

    
perform_math_operation(int1, operand, int2)