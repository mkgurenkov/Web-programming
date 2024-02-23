package model;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import java.util.List;


public class DatabaseInteractor {
    private static EntityManagerFactory entityManagerFactory;

    public DatabaseInteractor() {
        if (entityManagerFactory == null) {
            entityManagerFactory = Persistence.createEntityManagerFactory("persistenceUnit"); //не забыть "закрыть"
        }
    }

    public EntityManagerFactory getEntityManagerFactory() {
        return entityManagerFactory;
    }

    public Result getResult(int id) {
        EntityManager entityManager = entityManagerFactory.createEntityManager(); //один энтити менеджер - один контекст
        entityManager.getTransaction().begin();
        Result result = entityManager.find(Result.class, id); //Что возвращает если не находит? обработать
        entityManager.getTransaction().commit();
        entityManager.close();
        return result;
    }
    public List<Result> getResults() {
        EntityManager entityManager = entityManagerFactory.createEntityManager(); //один энтити менеджер - один контекст
        entityManager.getTransaction().begin();
        CriteriaQuery<Result> query = entityManager.getCriteriaBuilder().createQuery(Result.class); //Что возвращает если не находит? обработать
        Root<Result> root = query.from(Result.class);
        List<Result> results = entityManager.createQuery(query.select(root)).getResultList();
        entityManager.getTransaction().commit();
        entityManager.close();
        return results;
    }

    public void addResult(Result result) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        entityManager.persist(result.getPoint());
        entityManager.persist(result); //положить в контекст состояния, переход в состояние persistent
        entityManager.getTransaction().commit();
        entityManager.close();
    }
    public void clear() {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        entityManager.createNativeQuery("DELETE FROM result").executeUpdate();
        entityManager.createNativeQuery("DELETE FROM point").executeUpdate();
        entityManager.getTransaction().commit();
        entityManager.close();
    }

//    public Point getPointById(int id) {
//        EntityManager entityManager = entityManagerFactory.createEntityManager();
//        entityManager.getTransaction().begin();
//        Point point = entityManager.find(Point.class, id);
//        entityManager.getTransaction().commit();
//        entityManager.close();
//        return point;
//    }
//
//    public void setPoint(Point point) {
//        EntityManager entityManager = entityManagerFactory.createEntityManager();
//        entityManager.getTransaction().begin();
//        entityManager.persist(point); //положить в контекст состояния, переход в состояние persistent
//        entityManager.getTransaction().commit();
//        entityManager.close();
//    }

    //чтобы обновить - достать по айди, поменять поле у объекта, коммитнуть. Хибернейт сравнивает
    // изначальное состояние объекта и состояние объекта после коммита
    //entityManager.flush() - выполнить накопившиеся запросы, не дожидаясь коммита
    //удалить (перевести в состояние removed) entityManager.remove()
    //отвязать от контекста (перевести в состояние detached) - entityManager.detach()
    //можно выполнять также обычные запросы - entitManag.createNativeQuery("<запрос>").setParameter(position, value).executeUpdate();
    //можно писать запросы на JPQL - объектном языке запросов - пример: entitManag.createQuery("SELECT s FROM <класс сущности> s WHERE s.id = ?1", SomeEntity.class).setParameter.getSingleResult();
    //entitManag.merge(item) (перед этим задать item id, который уже существует) - после коммита значение в базе обновиться, можно не тащить объект из базы, чтобы его поменять, а использовать merge, если вызвать persist вместо merge - ошибка
    //entitManag.getReference(SomeEnt.class, id) - получить ссылку на объект из бд (вместо find), загрузится в память только после обращения к объекту
    //@CreationTimeStamp (может и не работать)
}