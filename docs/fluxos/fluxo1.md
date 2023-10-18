graph TD;
    1((Início))-->2;
    2{git iniciado no projeto?}
    2 --> |não| 3[git init]
    3 --> 11[Cria repositório Github]
    11 --> 12[git remote add <nome_remote> <endereço_remote>]
    12 --> 4
    2 --> |sim| 4[git status]
    4 --> 5{Commitar na branch main?}
    5 --> |sim| 6[git add <file_name>]
    6 --> 7[git commit -m <commit_message_entre_aspas>]
    7 --> 5
    5 --> |não| 8{Criar nova branch?}
    8 --> |sim| 9[git pull origin main]
    8 --> |não| 16((Fim))
    9 --> 10[git checkout -b <nova_branch_nome>]
    10 --> 13{Commitar?}
    13 --> |sim| 14[git add <file_name>]
    14 --> 15[git commit -m <commit_message_entre_aspas>]
    13 --> |não| 17{Abrir PR Github?}
    15 --> 13
    17 --> |sim| 18[git push <nome_remote> <nova_branch_nome>]
    17 --> |não| 16
    18 --> 20[Abrir/aprovar PR Github]
    20 --> 21[git checkout main]
    21 --> 22[git pull origin main]
    22 --> 23{Deletar <nova_branch_nome> já mergiada?}
    23 --> |sim| 24[git branch -d <nova_branch_nome>]
    23 --> |não| 5
    24 --> 5

