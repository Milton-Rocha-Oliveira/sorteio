const nomes = [];

        function adicionarNome() {
            const nome = document.getElementById("nomeInput").value;
            if (nome) {
                nomes.push(nome);
                document.getElementById("nomeInput").value = "";
                atualizarLista();
            }
        }

        function realizarSorteio() {
            if (nomes.length > 0) {
                const indiceSorteado = Math.floor(Math.random() * nomes.length);
                alert(`O nome sorteado é: ${nomes[indiceSorteado]}`);
            } else {
                alert("Adicione nomes à lista primeiro!");
            }
        }

        function atualizarLista() {
            const listaNomes = document.getElementById("listaNomes");
            listaNomes.innerHTML = "";
            nomes.forEach(nome => {
                const li = document.createElement("li");
                li.textContent = nome;
                listaNomes.appendChild(li);
            });
        }