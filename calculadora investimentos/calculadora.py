print("Bem-vindo à calculadora de investimentos!\n")

print("O que gostaria de calcular hoje?\n")
question = int(input("Valor final: 1\nValor mensal necessário: 2\nTempo (em meses): 3\n--> "))

if question == 1:
    inicial1 = float(input("Quantia inicial (R$): "))
    mensal1 = float(input("Quantia mensal (R$): "))
    meses1 = int(input("Meses de rendimento: "))
    juros1 = float(input("Juros mensais (%): "))

    final1 = inicial1
    for _ in range(meses1):
        final1 += mensal1
        final1 += final1 * (juros1 / 100)

    rendimento1 = final1 - (inicial1 + mensal1 * meses1)
    print(f"\nO valor final será de R$ {final1:.2f}")
    print(f"Seu rendimento será de R$ {rendimento1:.2f}")

elif question == 2:
    # Solicita os dados do usuário
    inicial2 = float(input("Quantia inicial (R$): "))
    meses2 = int(input("Meses de rendimento: "))
    juros2 = float(input("Juros mensais (%): "))
    final2 = float(input("Quantia desejada (R$): "))

    # Converte a taxa de juros para decimal
    juros_mensal = juros2 / 100

    # Calcula o aporte mensal necessário (PMT)
    mensal2 = (final2 - inicial2 * ((1 + juros_mensal) ** meses2)) / (((1 + juros_mensal) ** meses2 - 1) / juros_mensal)

    # Exibe o resultado
    print(f"\nVocê precisará investir mensalmente R$ {mensal2:.2f} para atingir R$ {final2:.2f} em {meses2} meses.")

elif question == 3:
    inicial3 = float(input("Quantia inicial (R$): "))
    mensal3 = float(input("Quantia mensal (R$): "))
    juros3 = float(input("Juros mensais (%): "))
    final3 = float(input("Quantia desejada (R$): "))

    meses3 = 0
    total = inicial3
    while total < final3:
        total += mensal3
        total += total * (juros3 / 100)
        meses3 += 1

    print(f"\nVocê precisará de {meses3} meses para atingir R$ {final3:.2f}.")

else:
    print("Opção inválida. Por favor, escolha 1, 2 ou 3.")
