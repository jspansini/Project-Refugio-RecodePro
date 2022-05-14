package br.com.Squad21.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.Squad21.entities.Avaliacao;
import br.com.Squad21.repositories.AvaliacaoRepository;

@Service
public class AvaliacaoService {
	
	
	@Autowired
	private  AvaliacaoRepository repository;

	@Transactional(readOnly = true)
	public List<Avaliacao> findAll() {
		List<Avaliacao> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Avaliacao findById(Long id) {
		Optional<Avaliacao> avaliacao = repository.findById(id);
		return avaliacao.get();
	}

	@Transactional(readOnly = false)
	public void save(Avaliacao avaliacao) {
		repository.save(avaliacao);
	}

	public void delete(Long id) {
		Optional<Avaliacao> avaliacao = repository.findById(id);
		if (avaliacao.isPresent()) {
			repository.delete(avaliacao.get());
		} else {
			System.out.println("Não existe");
		}
	}

	public Avaliacao update(Avaliacao avaliacao) {
		return repository.save(avaliacao);
	}


}
