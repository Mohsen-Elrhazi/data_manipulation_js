-- 1. Requête pour obtenir toutes les conversations entre deux utilisateurs
-- Contexte : Vous voulez récupérer toutes les conversations entre deux utilisateurs identifiés par leurs IDs.

select * from conversations




-- 2. Requête pour obtenir tous les messages d'une conversation spécifique
-- Contexte : Vous voulez récupérer tous les messages d'une conversation identifiée par son conversation_id.

select * from messages
join conversations
on messages.conversation_id=conversation.id