import random
import sys

# Define card values
CARD_VALUES = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'Jack': 10, 'Queen': 10, 'King': 10, 'Ace': 11
}
SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
RANKS = list(CARD_VALUES.keys())

def create_deck():
    """Create a new shuffled deck of 52 cards."""
    deck = []
    for suit in SUITS:
        for rank in RANKS:
            deck.append((rank, suit))
    random.shuffle(deck)
    return deck

def calculate_hand_value(hand):
    """Calculate the total value of a hand, adjusting for Aces."""
    value = 0
    ace_count = 0
    for card in hand:
        rank = card[0]
        value += CARD_VALUES[rank]
        if rank == 'Ace':
            ace_count += 1
    
    # Adjust for Aces: if bust, change an Ace's value from 11 to 1
    while value > 21 and ace_count > 0:
        value -= 10
        ace_count -= 1
    return value

def print_hand(hand, is_dealer=False, hide_first=False):
    """Print the cards in a hand."""
    if is_dealer and hide_first:
        print("Dealer's Hand: [<hidden card>, {}]".format(hand[1][0] + ' of ' + hand[1][1]))
    else:
        display = [card[0] + ' of ' + card[1] for card in hand]
        print(f"{'Dealer' if is_dealer else 'Player'}'s Hand: {display} = {calculate_hand_value(hand)}")

def game():
    """Main game loop."""
    deck = create_deck()
    player_hand = []
    dealer_hand = []

    # Initial deal
    for _ in range(2):
        player_hand.append(deck.pop())
        dealer_hand.append(deck.pop())

    # Player's turn
    while True:
        print_hand(player_hand)
        print_hand(dealer_hand, is_dealer=True, hide_first=True)
        
        player_score = calculate_hand_value(player_hand)
        if player_score > 21:
            print("Player busts! You lose.")
            return

        choice = input("Do you want to [h]it or [s]tand? ").lower()
        if choice == 'h':
            player_hand.append(deck.pop())
        elif choice == 's':
            break
        else:
            print("Invalid choice. Please enter 'h' or 's'.")

    # Dealer's turn
    print_hand(dealer_hand, is_dealer=True, hide_first=False) # Reveal dealer's hand
    dealer_score = calculate_hand_value(dealer_hand)
    while dealer_score < 17:
        print("Dealer hits.")
        dealer_hand.append(deck.pop())
        dealer_score = calculate_hand_value(dealer_hand)
        print_hand(dealer_hand, is_dealer=True, hide_first=False)

    if dealer_score > 21:
        print("Dealer busts! You win!")
    elif player_score > dealer_score:
        print("You win!")
    elif dealer_score > player_score:
        print("Dealer wins! You lose.")
    else:
        print("It's a tie!")

if __name__ == "__main__":
    game()
