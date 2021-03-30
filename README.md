## Cadastro de carro

**RF**
  Deve ser possível cadastrar um novo carro
  Deve ser possível listar todoas as categorias

**RN**
 Não deve ser possível cadastrar um carro com uma placa já existente.
 Não deve ser possível alterar uma placa de um carro já cadastrado.
 O carro deve ser cadastrado com disponibilidade por padrão.
 O usuário responsavel pelo cadastrado deve ser um usuário administrador.

## Listagem de carros

**RF**
Deve ser possível listar os carros disponíveis.
Deve ser possíovel listar todos os carros disponíveis pelo nome da categoria
Deve ser possíovel listar todos os carros disponíveis pelo nome da marca
Deve ser possíovel listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema.

## Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros
O usuário responsavel pelo cadastrado deve ser um usuário administrador.

**RN**
 Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
 Não deve ser possível cadastrar uma especificação já existente para o mesmo carro

## Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para o upload do arquivo

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsavel pelo cadastrado deve ser um usuário administrador.

## Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel


**RN**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário

Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
