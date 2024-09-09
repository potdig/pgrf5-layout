build-dev:
	docker compose --profile dev build --build-arg LAYOUTS_NAME=pgrf5-layout
build-prod:
	docker compose --profile prod build --build-arg LAYOUTS_NAME=pgrf5-layout
dev:
	docker compose --profile dev up -d
prod:
	docker compose --profile prod up -d
stop-dev:
	docker compose --profile dev stop
stop-prod:
	docker compose --profile prod stop