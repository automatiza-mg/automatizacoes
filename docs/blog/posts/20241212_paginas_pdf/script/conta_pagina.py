import sys
import os
from PyPDF2 import PdfReader, PdfWriter

def count_pdf_pages(file_path):
    """Conta o numero de paginas em um arquivo PDF."""
    try:
        reader = PdfReader(file_path)
        return len(reader.pages)
    except Exception as e:
        return f"Erro ao contar paginas: {str(e)}"

def split_pdf(file_path, output_dir, max_pages=6):
    """Divide um PDF em arquivos menores com um número maximo de paginas."""
    try:
        reader = PdfReader(file_path)
        total_pages = len(reader.pages)

        if total_pages <= max_pages:
            return f"O arquivo possui apenas {total_pages} paginas e nao sera dividido."

        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        base_name = os.path.splitext(os.path.basename(file_path))[0]

        for i in range(0, total_pages, max_pages):
            writer = PdfWriter()
            for j in range(i, min(i + max_pages, total_pages)):
                writer.add_page(reader.pages[j])

            output_file = os.path.join(output_dir, f"{base_name}_parte_{i // max_pages + 1}.pdf")
            with open(output_file, "wb") as output:
                writer.write(output)

        return f"Arquivo dividido em partes de ate {max_pages} paginas e salvo em {output_dir}."

    except Exception as e:
        return f"Erro ao dividir PDF: {str(e)}"

# Capturar os argumentos passados
if len(sys.argv) > 2:  # Verifica se os argumentos foram passados
    file_path = sys.argv[1]
    output_dir = sys.argv[2]

    print(f"Arquivo recebido: {file_path}")
    print(f"Diretorio de saida recebido: {output_dir}")

    if not os.path.exists(file_path):
        print(f"Erro: Arquivo {file_path} nao encontrado.")
        sys.exit(1)
    if not os.path.exists(output_dir):
        print(f"Erro: Diretorio de saida {output_dir} nao encontrado.")
        sys.exit(1)

    print(f"Contando paginas do arquivo: {file_path}")
    total_pages = count_pdf_pages(file_path)

    if isinstance(total_pages, int):
        print(f"O arquivo possui {total_pages} paginas.")
        print("Iniciando a divisao do PDF...")
        result = split_pdf(file_path, output_dir, max_pages=6)
        print(result)
    else:
        print(total_pages)
else:
    print("Erro: Caminho do arquivo ou diretorio de saida nao fornecido.")
