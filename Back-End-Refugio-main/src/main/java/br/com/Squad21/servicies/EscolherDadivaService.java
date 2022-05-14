package br.com.Squad21.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.Squad21.entities.EscolherDadiva;
import br.com.Squad21.repositories.EscolherDadivaRepository;

@Service
public class EscolherDadivaService {
	
	@Autowired
	private  EscolherDadivaRepository repository;

	@Transactional(readOnly = true)
	public List<EscolherDadiva> findAll() {
		List<EscolherDadiva> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public EscolherDadiva findById(Long id) {
		Optional<EscolherDadiva> escolherDadiva = repository.findById(id);
		return escolherDadiva.get();
	}

	@Transactional(readOnly = true)
	public void save(EscolherDadiva escolherDadiva) {
		repository.save(escolherDadiva);
	}

	public void delete(Long id) {
		Optional<EscolherDadiva> escolherDadiva = repository.findById(id);
		if (escolherDadiva.isPresent()) {
			repository.delete(escolherDadiva.get());
		} else {
			System.out.println("Não existe");
		}
	}

	public EscolherDadiva update(EscolherDadiva escolherDadiva) {
		return repository.save(escolherDadiva);
	}


}
